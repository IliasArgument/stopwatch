import React, {
    useEffect,
    useState,
} from 'react';
import { Observable, Subject } from 'rxjs';
import {
    map,
    buffer,
    debounceTime,
    filter,
    takeUntil,
} from 'rxjs/operators';

import DisplayComponent from '../Display/DislayComponent';

const ControlComponent = () => {
    const [state, setState] = useState('stop');
    const [time, setTime] = useState(0);

    const stop$ = new Subject();
    const click$ = new Subject();

    const start = () => {
        setState('start');
    };

    const stop = () => {
        setTime(0);
        setState('stop');
    }

    const reset = () => {
        setTime(0);
        setState('start');
    }

    const wait = () => {
        click$.next();
        setState('wait');
        click$.next();
    }

    useEffect(() => {
        const doubleClick$ = click$.pipe(
            buffer(click$.pipe(debounceTime(300))),
            map((list) => list),
            filter((value) => value >= 2),
        );
        const timer$ = new Observable((observer) => {
            let count = 0;
            const intervalId = setInterval(() => {
                observer.next(count += 1);
                console.log(count);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        });

        const subscribtion$ = timer$
            .pipe(takeUntil(doubleClick$))
            .pipe(takeUntil(stop$))
            .subscribe({
                next: () => {
                    if (state === 'start') {
                        setTime((prev) => prev + 1);
                    }
                },
            });
        console.log(state, 'state')
        return (() => {
            subscribtion$.unsubscribe();
        });
    }, [state]);
    return (
        <section className="stopwatch">
            <DisplayComponent
                time={time}
                start={start}
                stop={stop}
                reset={reset}
                wait={wait}
            />
        </section>
    );
};
export default ControlComponent;
