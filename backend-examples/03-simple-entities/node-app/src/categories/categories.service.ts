import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "./category.entity";
import {DeleteResult, Repository} from "typeorm";
import {IPaginationOptions, paginate, Pagination} from "nestjs-typeorm-paginate";
import {CreateCategoryDto} from "./create-category.dto";

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>,
    ) {}

    public create(categoryData: CreateCategoryDto): Promise<Category> {
        return this.repository.save(categoryData);
    }

    public findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    public findOne(id: number): Promise<Category | null> {
        return this.repository.findOne({ where: { id } }).then(result => result ?? null);
    }

    public  remove(id: number): Promise<DeleteResult>{
        return this.repository.delete(id);
    }
    public paginate(options: IPaginationOptions): Promise<Pagination<Category>> {
        return paginate<Category>(this.repository, options);
    }
}
