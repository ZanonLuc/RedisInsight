import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CloudCapiKey {
  @ApiProperty({
    type: String,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: String,
  })
  @Expose()
  userId: string;

  @ApiProperty({
    description: 'Autogenerated name of capi key (Redisinsight-<RI id>-<ISO date of creation>',
    type: String,
  })
  @Expose()
  name: string;

  @ApiProperty({
    type: Number,
  })
  @Expose()
  cloudAccountId: number;

  @ApiProperty({
    type: Number,
  })
  @Expose()
  cloudUserId: number;

  @ApiProperty({
    type: String,
  })
  @Expose()
  capiKey: string;

  @ApiProperty({
    type: String,
  })
  @Expose()
  capiSecret: string;

  @ApiProperty({
    type: Boolean,
  })
  @Expose()
  valid?: boolean;

  @ApiProperty({
    type: Date,
  })
  @Expose()
  createdAt?: Date;

  @ApiProperty({
    type: Date,
  })
  @Expose()
  lastUsed?: Date;
}
