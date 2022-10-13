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
  public NODE_ENV: string = "";
  public JWT_SECRET_TOKEN: string = "";
  public JWT_EXPIRES_IN: string = "";
  public DB_HOST: string = "";
  public DB_NAME: string = "";
  public DB_USER: string = "";
  public DB_PASSWORD: string = "";
  public DB_PORT: number = 1;
  public USE_SSL: boolean = false;
  public SMTP_USER_NAME: string = "";
  public SMTP_PASSWORD: string = "";
  public SMTP_ADDRESS: string = "";
  public SMTP_DOMAIN: string = "";
  public SMTP_PORT: number = 1;

  constructor() {
    dotenv.config();
    Object.keys(this).forEach((key: string) => {
      Object.assign(this, {
        [key]: checkAndThrow(process.env[key], key)
      });
    });
  }
}

export const Config = new ConfigurationBuilder();
