import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kysely, PostgresDialect } from 'kysely';
import * as DBExcer from '../../../prisma/src/generated/types';
import { Pool } from 'pg';
import { Env } from '../config/env';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
    private readonly _db: Kysely<DBExcer.DB>;
    private readonly pool: Pool;

    constructor(private readonly configService: ConfigService<Env, true>) {
        this.pool = new Pool({
            connectionString: this.configService.get('DATABASE_URL'),
        });

        this._db = new Kysely<DBExcer.DB>({
            dialect: new PostgresDialect({
                pool: this.pool,
            }),
        });
    }

    get db(): Kysely<DBExcer.DB> {
        return this._db;
    }

    async onModuleDestroy() {
        await this.pool.end();
    }
} 