import { MoviesService } from "./movies.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller("movies")
export class MoviesController {
    constructor (private moviesService: MoviesService) {}

    @Post()
        async create(@Body() movieData: any) {
        const result = await this.moviesService.create(movieData);
        return {
            data: result.rows[0],
        };
    };

    @Get()
        async read() {
        const result = await this.moviesService.read();
        return {
            data: result.rows,
        };
    };

    @Get(':id')
        async retrieve(@Param('id') id: string) {
        const result = await this.moviesService.retrieve(id);
        return {
            data: result.rows[0],
        };
    };

    @Put(':id')
        async partialUpdate(@Param('id') id: string, @Body() updateData: any) {
        const result = await this.moviesService.partialUpdate(id, updateData);
        return {
            data: result.rows[0],
        };
    };

    @Delete(':id')
        async destroy(@Param('id') id: string) {
        await this.moviesService.destroy(id);
        return {
            message: 'Movie deleted successfully',
        };
    };
};