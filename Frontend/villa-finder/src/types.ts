export interface Villa {
  id: number,
  title: string,
  bedrooms: number,
  price: number,
  state: string,
  city: string,
  latitude: number,
  longitude: number
  details: string,
  images: string[],
  landLord: string,
  phone: string,
  email: string
}

export interface Coordinate {
  lat: number,
  lng: number
}

export interface Image {
  src: string,
  isSelectedInGallery: boolean,
  isSelectedInLightbox: boolean
}

export interface User{
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  phone: string,
  password: string,
  villas: Villa[]
}
