export class BasicResolver {
  getShemas(resolver: Record<string, any>) {
    const getDefs = (type: RegExp): string => {
      return Object.keys(this)
      .filter((i: string) => i.match(type))
      .reduce((prev: string, i: string) => {
        return `${prev}
        ${resolver[i]}`;
      }, "");
    };

    let queries = getDefs(/^_q/);
    if (queries) {
      queries = `extend type Query { ${queries}
      }`;
    }

    let mutations = getDefs(/^_m/);
    if (mutations) {
      mutations = `extend type Mutation { ${mutations}
    }`;
    }

    let schemas = getDefs(/^_schema/);
    return `
      ${schemas}
      ${mutations}
      ${queries}
    `
  }
}