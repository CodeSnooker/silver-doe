/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeUIService } from './home-ui.service';

describe('HomeUIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeUIService]
    });
  });

  it('should ...', inject([HomeUIService], (service: HomeUIService) => {
    expect(service).toBeTruthy();
  }));
});
