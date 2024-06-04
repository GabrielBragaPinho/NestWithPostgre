import format from 'pg-format';
import { QueryResult } from 'pg';
import { client } from "src/database";
import { Injectable } from "@nestjs/common";


@Injectable()
export class MoviesService {
    async create (movie: any): Promise<QueryResult> {
        const queryTemplate: string = `
        INSERT INTO "movies"
            ("name", "year", "director")
        VALUES 
            ($1, $2, $3)
        RETURNING *;
        `;
        return client.query(queryTemplate, [
            movie.name,
            movie.year,
            movie.director,
        ]);
    };

    async read (): Promise<QueryResult> {
        return client.query('SELECT * FROM "movies";');
    };

    async retrieve (movieId: string): Promise<QueryResult> {
        return client.query('SELECT * FROM "movies" WHERE "id" = $1;', [movieId]);
    };

    async partialUpdate (movieId: string, updateData: any): Promise<QueryResult> {
        const queryFormat: string = format(
            'UPDATE "movies" SET (%I) = ROW(%L) WHERE "id" = %L RETURNING *;',
            Object.keys(updateData),
            Object.values(updateData),
            movieId
        );
        return client.query(queryFormat);
    };

    async destroy (movieId: string): Promise<QueryResult> {
        return client.query('DELETE FROM "movies" WHERE "id" = $1;', [movieId]);
    };
};