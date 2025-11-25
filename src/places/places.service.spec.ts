// src/places/places.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PlacesService } from './places.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = {
  place: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
};

describe('PlacesService', () => {
  let service: PlacesService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlacesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
    prisma = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('search', () => {
    it('should search for places', async () => {
      const result = await service.search('pizza');
      expect(result).toEqual([]);
    });
  });
});