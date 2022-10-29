import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

console.log(user);
console.log(company);
// map.addUserMarker(user);
// map.addCompanyMarker(company);

map.addMarker(user);
map.addMarker(company);
// map.addPopup();
