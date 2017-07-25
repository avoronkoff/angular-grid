import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grid_items = [
      {Name: 'Jill', Surname: 'Smith', Score: 95},
      {Name: 'Eve', Surname: 'Jackson', Score: 94},
      {Name: 'John', Surname: 'Doe', Score: 80},
      {Name: 'Adam', Surname: 'Johnson', Score: 67},
      {Name: 'Max', Surname: 'Daniels', Score: 45}
    ];
    return {grid_items};
  }
}
