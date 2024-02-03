export const idMaker = (id)=>{
   return id.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
}