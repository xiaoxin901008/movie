import pymysql
import os

class Save:
    def __init__(self):
        self.host = '127.0.0.1'
        self.user = 'root'
        self.pwd = 'xiaoxin'
        self.db = 'movie'
        self.conn()
    def conn(self):
        self.mysql = pymysql.connect(self.host, self.user, self.pwd, self.db)
        self.cursor = self.mysql.cursor()

    def main(self):
        if not os.path.exists('image/movie'):
            os.mkdir('image/movie')
        self.cursor.execute('select id, title, logo from movie where title is not null and id > 59999 and id < 70000')
        movies = self.cursor.fetchall()
        x = 0
        for movie in movies:
            id = movie[0]
            print('start____,',x,id)
            x += 1

            title = movie[1].split(' ')[0]
            logo = movie[2]
            if not os.path.exists(title):
                os.mkdir('image/movie/' + title)
                with open('image/movie/' + title + '/' + title + '.jpg','wb') as f:
                    f.write(logo)

                self.cursor.execute('select name,logo,url from image where movie_id=%s' % id)
                images = self.cursor.fetchall()
                for image in images:
                    with open('image/movie/' + title + '/' + image[2].split('/')[-1] + '.jpg', 'wb') as f:
                        f.write(image[1])

            else:
                continue

    def performer(self):
        if not os.path.exists('performer'):
            os.mkdir('performer')
        self.cursor.execute('select name,image from performer')
        performers = self.cursor.fetchall()
        x = 0
        for performer in performers:
            print('start____,', x)
            x += 1
            name = performer[0]
            logo = performer[1]
            with open('performer/' + name + '.jpg', 'wb') as f:
                f.write(logo)


save = Save()
save.main()

