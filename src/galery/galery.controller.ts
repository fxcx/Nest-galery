import { Controller, Get } from '@nestjs/common';
import { GaleryService } from './galery.service';

@Controller({})
export class GaleryController {
    constructor(galeryService: GaleryService) {
        galeryService: GaleryService
    }



    @Get("/galery")
    getGalery() { }
}
