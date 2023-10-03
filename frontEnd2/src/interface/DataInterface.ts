interface Img {
  name:string;
  img:string;
  dsc:string;
}
interface Product{
  id:number;
  name:string
  price:number;
  detail:string;
  picture:string;
  quantity:number;
  categoryId:number;
  created_at:string;
  updated_at:string;
}

interface Category {
  id:number;
  name:string;
  quantity:number;
}

interface ResponseInfo{
  success:boolean;
  message:string;
}

interface ResponseData extends ResponseInfo{
  next:string|undefined;
  previous:string|undefined;
  size:number;
}

interface ResponseDataProduct extends ResponseData{
  data: Product[];
}
interface ResponseDataCategory extends ResponseData{
  data: Category[];
}

interface User{
  id:number;
  name:string;
  email:string;
}

interface UserInfo extends User{
  card:string;
  email_verified_at:string|null;
}

interface ResponseLogin {
  access_token:string;
  token_type:string;
  expires_in:number;
}

interface ResponseDataUser extends ResponseData{
  data:{user:UserInfo}
}

export type {
  Img,
  User,
  UserInfo,
  Product,
  Category,
  ResponseInfo,
  ResponseData,
  ResponseDataUser,
  ResponseDataProduct,
  ResponseDataCategory,
  ResponseLogin
}