import { Controller } from '@nestjs/common';
import { TsRest, tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { healthContract } from './health.contract';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
    constructor(private readonly healthService: HealthService) { }

    @TsRestHandler(healthContract.healthCheck)
    async healthCheck() {
        return tsRestHandler(healthContract.healthCheck, async () => {
            const result = await this.healthService.checkHealth();

            return {
                status: 200,
                body: result,
            };
        });
    }
} 