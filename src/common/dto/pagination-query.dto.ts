import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  limit: number; // this ensures that the limit only accept number

  @IsOptional()
  @IsPositive()
  offset: number;
}
