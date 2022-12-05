# TODO: Use terraform to provision table
provider "aws" {
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    access_key                  = "mock_access_key"
    secret_key                  = "mock_secret_key"
    region                      = "us-east-1"
    endpoints {
        dynamodb = "http://localhost:4569"
    }
}
