import { ApiService } from "./ApiService";
import { authService } from "./AuthService";

class CarService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  getAll = async (page, per_page) => {
    const response = await this.client.get(`/cars?per_page=${per_page}&page=${page}`, {
      headers: this.authService.getHeaders(),
    });

    return response;
  };

  get = async (id) => {
    return await this.client.get(`/cars/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };

  add = async (car) => {
    return await this.client.post("/cars", car, {
      headers: this.authService.getHeaders(),
    });
  };

  edit = async (id, car) => {
    return await this.client.put(`cars/${id}`, car, {
      headers: this.authService.getHeaders(),
    });
  };

  delete = async (id) => {
    return await this.client.delete(`/cars/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };
}

export const carService = new CarService();
