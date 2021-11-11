import { TestBed } from '@angular/core/testing';

import { CadastroPfService } from './cadastro-pj.service';

describe('CadastroPfService', () => {
  let service: CadastroPfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroPfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
