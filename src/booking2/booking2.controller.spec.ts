import { Test, TestingModule } from '@nestjs/testing';
import { Booking2Controller } from './booking2.controller';
import { Booking2Service } from './booking2.service';

describe('Booking2Controller', () => {
  let controller: Booking2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Booking2Controller],
      providers: [Booking2Service],
    }).compile();

    controller = module.get<Booking2Controller>(Booking2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
