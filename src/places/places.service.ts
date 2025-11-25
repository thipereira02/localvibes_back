import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  async search(text: string) {
    return [];
  }

  async create(data: any) {
    return { id: 1, ...data };
  }
}
