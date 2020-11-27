import sqlite3
import pymysql
import numpy as np
import pandas as pd
# ※중복실행을 염두에 두고 만든 것이 아니라서 두번 이상 실행 시 데이터베이스에 문제가 생길 수 있음
# 다시 실행해야 하는 경우에는 데이터베이스를 직접 초기화하는 것을 권장함

xlsxdata = pd.read_excel('base_data.xlsx', sheet_name=None)
wordtype = np.array(xlsxdata["WordType"])
wordlist = np.array(xlsxdata["WordList"])
charlist = np.array(xlsxdata["CharList"])
backlist = np.array(xlsxdata["BackList"])

sql1 = "insert into ai_publisher_wordtype values ("
for i in range(len(wordtype)-1):
    sql1 += str(wordtype[i][0]) + ", '" + wordtype[i][1] + "'), ("
sql1 += str(wordtype[len(wordtype)-1][0]) + ", '" + wordtype[len(wordtype)-1][1] + "');"

sql2 = "insert into ai_publisher_wordlist(WordType_id, WordContext) values ("
for i in range(len(wordlist)-1):
    sql2 += str(wordlist[i][1]) + ", '" + wordlist[i][2] + "'), ("
sql2 += str(wordlist[len(wordlist)-1][1]) + ", '" + wordlist[len(wordlist)-1][2] + "');"

sql3 = "insert into ai_publisher_charlist(CharPic) values ('"
for i in range(len(charlist)-1):
    sql3 += charlist[i][1] + "'), ('"
sql3 += charlist[len(charlist)-1][1] + "');"

sql4 = "insert into ai_publisher_backlist(BackPic) values ('"
for i in range(len(backlist)-1):
    sql4 += backlist[i][1] + "'), ('"
sql4 += backlist[len(backlist)-1][1] + "');"

# sqlite3을 쓰는 경우 이곳의 주석처리를 해제한다.

connection_sqlite3 = sqlite3.connect("db.sqlite3")
cursor_sqlite3 = connection_sqlite3.cursor()
cursor_sqlite3.execute(sql1)
cursor_sqlite3.execute(sql2)
cursor_sqlite3.execute(sql3)
cursor_sqlite3.execute(sql4)
connection_sqlite3.commit()
cursor_sqlite3.close()
connection_sqlite3.close()


# mysql을 쓰는 경우 이곳의 주석처리를 해제한다.
'''
connection_mysql = pymysql.connect(user='root', passwd='dykim4660!', host='localhost',
                                   db='aipublisher', port=3306, charset='utf8')
cursor_mysql = connection_mysql.cursor()
cursor_mysql.execute(sql1)
cursor_mysql.execute(sql2)
cursor_mysql.execute(sql3)
cursor_mysql.execute(sql4)
connection_mysql.commit()
cursor_mysql.close()
connection_mysql.close()
'''
