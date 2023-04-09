export default interface Todo {
  id: number;
  content: string;
}

export default interface Coupon {
  id: number;
  name: string;
  barcode: string;
  discount: number;
}
export default interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
}
export default interface Item {
  id: number;
  item: string;
  recurring: string;
  date_recorded: string;
  price: number;
  aisle: string;
  barcode: string;
  checked: boolean;
  store_id: number;
  coupon_id: string;
  person_id: number;
}

export default interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
