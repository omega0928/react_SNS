const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {

    passport.serializeUser((user, done) => { // 서버쪽에 [{ id:3, cookie: 'asdfgd' }] 
        return done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            return done(null, user); // req.user
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });

    local();
};

// 프론트에서 서버로는 cookie만 보냄(asdfgd)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사후 id: 3발견
// id: 3이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감 
// 요청 보낼때마다 deserializeUser가 실행됨 (db 요청 1번씩 실행)
// 실무에서는 deserializeUser 결과물 캐싱(1번 찾은 유저는 다시 안찾게) 
// 위의 사이클이 대부분 웹사이트가 채용하고 있는 방법