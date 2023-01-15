import { httpService } from "./HttpService";

export class ApiService {
  constructor() {
    this.client = httpService.client;
  }
}
