"use strict";
function readArticleList() {
    return new Promise(resolve => {
        setTimeout(() => resolve([
                {
                    writer  : "hanmir1"
                    , date  : new Date()
                    , title : "testTitle1"
                    , description : "testDescription1"
                    , likeCount : 0
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "83712498"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
                , {
                    writer  : "hanmir2"
                    , date  : new Date()
                    , title : "testTitle2"
                    , description : "testDescription2"
                    , likeCount : 333
                    , isAlreadyLike : false
                    , tag : [
                        "asdf", "13", "das"
                    ]
                }
            ]), 1000);
    })
}