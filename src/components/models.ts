export interface Todo {
  id: number;
  content: string;
}

export interface Coupon{
  id: number;
  name: string;
  barcode: string;
  discount: number;
}
export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
}
export interface Item{
    id: number;
    item: string;
    recurring: string
    date_recorded; string
    price: number;
    aisle: string;
    barcode: string;
    store_id: number;
    coupon_id: string;
    person_id: number;
}

export interface Person {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

