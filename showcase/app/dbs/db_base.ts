const dbModel = (dbName: string) => {
    let model = require('../model/' + dbName);

    return {
        add: (data: {}, cb: any) => {
            let result = new model(data);
            return result.save(cb);
        },
        del: (data: {}, cb: any) => {
            return model
                .remove(data)
                .exec(cb);
        },
        edit: (data: {save: any}, cb: any) => {
            return data.save(cb);
        },
        getOne: (data: {find: {}, select?: string}) => {
            return model
                .findOne(data.find)
                .select(data.select || {})
                .exec();
        },
        getCount: (data: {}, cb: any) => {
            return model
                .count(data)
                .exec(cb);
        },
        getById: (data: {find: {}, select: string}, cb: any) => {
            return model
                .findById(data.find)
                .select(data.select || {})
                .exec(cb);
        },
        getList: (data: {find: {}, select: string, sort: {}, skip: number, limit: number}, cb: any) => {
            return model
                .find(data.find)
                .select(data.select || {})
                .sort(data.sort || {})
                .skip(data.skip)
                .limit(data.limit)
                .exec(cb);
        },
        update: (data: {find: {}, set: {}, options: {}}, cb: any) => {
            return model
                .update(data.find, data.set, data.options || {multi: true})
                .exec(cb);
        },
        group: (data: {match: {}, group: {}}, cb: any) => {
            return model
                .aggregate()
                .match(data.match)
                .group(data.group)
                .exec(cb);
        }
    };

};

export = dbModel;