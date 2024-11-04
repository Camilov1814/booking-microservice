import { Test, TestingModule } from '@nestjs/testing';
import { Booking2Service } from './booking2.service';

describe('Booking2Service', () => {
  let service: Booking2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Booking2Service],
    }).compile();

    service = module.get<Booking2Service>(Booking2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
