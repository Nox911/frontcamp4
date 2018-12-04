const fetchProxy = new Proxy(fetch, {
    apply: function(target, thisArg, argumentsList) {
        console.log(
            `Request to URL:'${
                argumentsList[0]
            }' with next parameters: ${JSON.stringify(argumentsList[1])}`
        );

        return target.apply(thisArg, argumentsList);
    },
});

export class NewsFactory {
    constructor(options = {}) {
        this.options = options;
    }

    async get(url) {
        return await fetchProxy(url, {
            method: 'GET',
            ...this.options,
        });
    }

    async find(url, search) {
        return (response = await fetchProxy(url, {
            method: 'POST',
            body: JSON.stringify({ q: search }),
            ...this.options,
        }));
    }
}
