# Book-accommodation_php

・testファイル
XAMPで動かしているtest.phpファイルにアクセスしてJSONデータを貰うテスト
引数を設定して受け取れているかのテスト

・test2ファイル
XAMPのApacheでMYSQLのデータベースと接続してデータをJSON形式にするテスト

・test3ファイル
ロリポップにデータベースを作成してphpファイルをアップロード。パソコンからAPIにアクセスをするテスト
CROSエラーが発生するためheaderを追加。

・test4ファイル
phpファイルにDAOを作成。引数を設定してユーザデータ一覧が欲しいときはget_user、ホテル情報が欲しいときはget_hotelとhotel_idの引数を設定すると
それぞれ違う値が受け取れる。
test2.htmlをホテルIDを入力してホテル情報を出力するように改修。

・test5ファイル
ユーザデータ一覧が欲しいときはget_userlist,idを指定して一人分のデータが欲しいときはget_user,user_id
をしようするようにphpファイルを変更。
タグの情報を入れ子構造にしてあるものから番号で情報を取得して言葉を表示

・test6ファイル
ユーザのログイン機能の実装
updatedを使用してデータが更新された時に画面遷移の確認処理が動く

・test7ファイル
hotel_tag_1~5を入力して検索キーワードを入力するとキーワードが入ったhotel_idが返ってくる
DAOにget_hotellistを作成
get_hotellistからホテルIDが一致するものだけ表示（改善余地あり）

・test8ファイル
gat_hotel_tag1,gat_hotel_tag2に分けて作成
1:検索したキーワードのあるタグIDを配列で返す
2:検索したキーワードのあるホテル情報を配列で返す

・test9ファイル
最初は種別がホテル住所が東京のホテルで絞り込んだ状態でホテル情報を持ってきて
そのあとに検索ワードに引っかかるものだけを表示する。

・test10ファイル
種別が旅館のinsert文を追加。そのあとリストボックスからホテル→旅館に変えても表示がきちんと行われるように修正

・test11ファイル
写真の画像パスから表示できるかのテスト
