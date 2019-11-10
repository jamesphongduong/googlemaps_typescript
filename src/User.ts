import faker from 'faker';
import { Mappable } from './CustomMap';

// tells TS that we want User class to satisfy the Mappable interface, creating a direct dependency
// better for catching errors
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name: ${this.name}</h1>
    </div>`;
  }
}
