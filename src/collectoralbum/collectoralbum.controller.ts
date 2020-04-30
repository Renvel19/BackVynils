import { Controller, Post, HttpCode, Param, Body, UseInterceptors, Get, Put } from '@nestjs/common';
import { CollectorAlbumDTO } from './collectoralbum.dto';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { CollectorAlbumService } from './collectoralbum.service';

@Controller('collectors')
@UseInterceptors(BusinessErrorsInterceptor)
export class CollectorAlbumController {

    constructor(private readonly collectorAlbumService: CollectorAlbumService) { }

    @Get(':collectorId/albums/')
    async findAlbumsByCollectorId(@Param('collectorId') collectorId) {
        return await this.collectorAlbumService.findAlbumsByCollectorId(collectorId);
    }

    @Get(':collectorId/albums/:albumId')
    async findAlbumsByCollectorIdAlbumId(@Param('collectorId') collectorId, @Param('albumId') albumId) {
        return await this.collectorAlbumService.findAlbumsByCollectorIdAlbumId(collectorId, albumId);
    }

    @Post(':collectorId/albums/:albumId')
    @HttpCode(200)
    async addAlbumToCollector(@Param('collectorId') collectorId: number, @Param('albumId') albumId: number, @Body() collectorAlbumDTO: CollectorAlbumDTO) {
        return await this.collectorAlbumService.addAlbumToCollector(collectorId, albumId, collectorAlbumDTO);
    }

    @Put(':collectorId/albums/:albumId')
    async updateAlbumCollector(@Param('collectorId') collectorId: number, @Param('albumId') albumId: number, @Body() collectorAlbumDTO: CollectorAlbumDTO) {
        return await this.collectorAlbumService.updateAlbumCollector(collectorId, albumId, collectorAlbumDTO);
    }
}
