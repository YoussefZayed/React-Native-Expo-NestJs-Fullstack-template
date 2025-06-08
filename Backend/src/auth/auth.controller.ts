import { Controller } from '@nestjs/common';
import { TsRest, tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { authContract } from './auth.contract';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @TsRestHandler(authContract)
    async handler() {
        return tsRestHandler(authContract, {
            register: async ({ body }) => {
                const user = await this.authService.register(body);
                return {
                    status: 201,
                    body: user,
                };
            },
            login: async ({ body }) => {
                const result = await this.authService.login(body);
                return {
                    status: 200,
                    body: result,
                };
            },
        });
    }
} 