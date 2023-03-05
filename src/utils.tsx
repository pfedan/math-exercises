class myRNG {
  private _seed: number
  constructor(seed: number = Math.random()) {
    this._seed = seed
  }

  public setSeed(newSeed: number) {
    this._seed = newSeed
  }

  public double() {
    var x = Math.sin(this._seed++) * 10000
    return x - Math.floor(x)
  }

  public int(min: number = 0, max: number = 100) {
    var x = Math.sin(this._seed++) * 10000
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min
  }

  public intArrayUnique(count: number, min: number = 0, max: number = 100) {
    var arr = []
    while (arr.length < count) {
      var r = this.int(min, max)
      if (arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
  }
}

export const rng: myRNG = new myRNG()
