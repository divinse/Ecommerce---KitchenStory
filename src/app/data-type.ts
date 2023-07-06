export interface login {
  name: string,
  pass:string
}
export interface passwordupdate {
  pass:string,
  repass:string,
  name:string,
  id:number
}
export interface product{
  pname:string,
  pdesc:string,
  pprice:number,
  pquant:number,
  purl:string,
  id:number,
  rating:number,
  ordquant:undefined|number
}
