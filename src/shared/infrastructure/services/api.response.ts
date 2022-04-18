import { Either } from '../../core/either';
import { Result } from '../../core/result';
import { APIErrorMessage } from './api.error.message';

export type APIResponse<T> = Either<APIErrorMessage, Result<T>>;
