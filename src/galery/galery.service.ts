import { Injectable } from '@nestjs/common';

@Injectable()
export class GaleryService {

    getGalery() {
        return 'This action returns all galery';
    }
}
