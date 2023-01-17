import { ApiService } from "./ApiService";
import { authService } from "./AuthService";

class CarService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  getAll = async (page, per_page, brand, model) => {
    console.log(!brand);
    if (!brand && !model) {
      const response = await this.client.get(
        `/cars?per_page=${per_page}&page=${page}`,
        {
          headers: this.authService.getHeaders(),
        }
      );
      return response;
    }
    if (!model) {
      const response2 = await this.client.get(`/cars?brand=${brand}`, {
        headers: this.authService.getHeaders(),
      });
      return response2;
    }
    if (!brand) {
      const response3 = await this.client.get(`/cars?model=${model}`, {
        headers: this.authService.getHeaders(),
      });
      return response3;
    }

    const response4 = await this.client.get(`/cars?brand=${brand}&model=${model}`, {
      headers: this.authService.getHeaders(),
    });
    return response4;
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
