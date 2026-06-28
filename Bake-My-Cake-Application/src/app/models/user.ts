export type User = {
  firstName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  address?: {
      street?:string
      city?: string;
      state?: string;
      zipCode?: string;
  };
  role?:string
};
