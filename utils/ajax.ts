import { AxiosObservable } from 'axios-observable/lib/axios-observable.interface'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseResponse(observable: AxiosObservable<any>): Observable<any> {
  return observable.pipe(map(({ data }) => data))
}
