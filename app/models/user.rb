class User < ActiveRecord::Base
  has_many :languages_users
  has_many :languages, through: :languages_users
  scope :platinum, -> {where("days > 719")} 
  scope :gold, -> {where("days > 364 and days <= 719")} 
  scope :silver, -> {where("days > 199 and days <= 364")} 
  scope :bronze, -> {where("days > 99 and days <= 199")} 
  scope :hopeful, -> {where("days >= 0 and days <= 99")}
  
  def self.get_all_sorted_by_days
    self.order(days: :desc)
  end

  def populate_from_duolingo_api
    url = "https://api.duolingo.com/users/" + self.username
    if valid_json_response?(url)
      json = parse_json(url)
      assign_attributes_from_duo_api(json)
    else
      self.errors.add(:username, "Duolingo couldn't find the username: #{username}!")
      return false
    end
  end

  private

  def assign_attributes_from_duo_api(json)
    self.days = json["site_streak"]
    languages = json["languages"].select { |l| l["learning"] }
    languages.each do |l|
      language_instance = Language.find_or_create_by(name: l["language_string"])
      self.languages << language_instance unless self.languages.include? language_instance
    end
    self.save
  end

  def parse_json(url)
    uri = URI(url)
    response = Net::HTTP.get(uri)
    JSON.parse(response)
  end
  
  def valid_json_response?(url)
    uri = URI(url)
    response = Net::HTTP.get(uri)
    begin
      JSON.parse(response)
      return true
    rescue JSON::ParserError => e
      return false
    end
  end
end
