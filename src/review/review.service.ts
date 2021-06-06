import { Injectable } from '@nestjs/common';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Types } from 'mongoose';

import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel)
    private readonly reviewModel: ReturnModelType<typeof ReviewModel>
  ) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(
    productId: string
  ): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel
      .find({ productId: Types.ObjectId(productId) })
      .exec();
  }

  async deleteByProductId(
    productId: string
  ): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel
      .deleteMany({ productId: Types.ObjectId(productId) })
      .exec();
  }
}
