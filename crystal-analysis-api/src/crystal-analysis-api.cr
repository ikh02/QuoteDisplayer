require "kemal"
require "json"

# Add CORS Headers to allow requests from the Angular app
after_all do |env|
  env.response.headers.add "Access-Control-Allow-Origin", "*"
  env.response.headers.add "Access-Control-Allow-Methods", "GET, POST, OPTIONS"
  env.response.headers.add "Access-Control-Allow-Headers", "Content-Type"
end

# Handle pre-flight OPTIONS requests for CORS
options "/*" do |env|
  env.response.status_code = 204
  ""
end

post "/api/analyze" do |env|
  # Parse the incoming JSON from the request body
  json_body = JSON.parse(env.request.body.not_nil!.gets_to_end)
  text = json_body["text"].as_s

  # Perform the analysis
  word_count = text.split.size
  char_count = text.size

  # Build and return the response as JSON
  {
    "original_text" => text,
    "word_count" => word_count,
    "character_count" => char_count
  }.to_json
end

Kemal.run