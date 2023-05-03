import { AccountModel } from "domain/models/account-model";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
