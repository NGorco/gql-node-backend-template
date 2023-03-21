import * as dotenv from "dotenv";

function checkAndThrow(
  variable: string | undefined,
  variableName: string | boolean | number
): string {
  if (!variable) {
    throw new Error(`env variable "${variableName}" is required`);
  }
  return variable;
}

class ConfigurationBuilder {
  public NODE_ENV = "";
  public JWT_SECRET_TOKEN = "";
  public JWT_EXPIRES_IN = "";
  public DB_HOST = "";
  public DB_NAME = "";
  public DB_USER = "";
  public DB_PASSWORD = "";
  public DB_PORT = 1;
  public USE_SSL = false;
  public SMTP_USER_NAME = "";
  public SMTP_PASSWORD = "";
  public SMTP_ADDRESS = "";
  public SMTP_DOMAIN = "";
  public SMTP_PORT = 1;
  public API_PORT = 0;

  constructor() {
    dotenv.config();
    Object.keys(this).forEach((key: string) => {
      Object.assign(this, {
        [key]: checkAndThrow(process.env[key], key),
      });
    });
  }
}

export const Config = new ConfigurationBuilder();
