const post = ( params: string, url: string ): Promise<any> => {
    return new Promise((resolve, reject) => {
        const request: XMLHttpRequest = new XMLHttpRequest();
        const successfulRequest: boolean = request.readyState === 4 && request.status === 200;
        request.open('POST', url, true);
        request.addEventListener('load', (): void => {
            successfulRequest
                ? resolve(request.responseText)
                : reject(new Error(`Request Failed: ${request.statusText}`));
        });

        request.addEventListener('error', (): void => {
            reject(new Error('Network Error'));
        });

        request.send(params);
    });
};

export default post;
