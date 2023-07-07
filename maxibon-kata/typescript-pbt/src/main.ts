export class MaxibonFridge {

  constructor(
    private icecreams: number = 10
  ) { }

  grabIceCreamBy(developers: Developer[]) {
    const minimumIceCreams = 2

    developers.forEach(developer => {
      const remainingIceCreams = this.icecreams - developer.numberOfIceCreams

      if (remainingIceCreams <= minimumIceCreams) {
        this.replenishIceCreams()
      }

      this.icecreams -= developer.numberOfIceCreams;
    })
  }

  replenishIceCreams() {
    this.icecreams += 10
  }

  remainingIceCreams(): number {
    return this.icecreams
  }
}

export class Developer {
  constructor(
    readonly name: string,
    readonly numberOfIceCreams: number
  ) { }

  static pedro(): Developer {
    return new Developer('Pedro', 3)
  }

  static fran(): Developer {
    return new Developer('Fran', 1)
  }

  static david(): Developer {
    return new Developer('David el fidness', 0)
  }

  static sergio(): Developer {
    return new Developer('Sergio', 2)
  }

  static jorge(): Developer {
    return new Developer('Jorge', 1)
  }
}