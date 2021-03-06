import ALL_ADS from './all_ads';

export interface Ad {
    imageUrl: string,
    title: string,
    body: string,
    url: string,
}

class Ads {
    private static instance;

    private ads: Ad[];

    private constructor () {
        this.initAds();
    }

    static getInstance () {
        if (!Ads.instance) Ads.instance = new Ads();

        return Ads.instance;
    }

    private initAds () {
        this.ads = [...ALL_ADS];
    }

    getAd () {
        if (this.ads.length === 0) this.initAds();

        return this.ads.pop();
    }
}

export default Ads;